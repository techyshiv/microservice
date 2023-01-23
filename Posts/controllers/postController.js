import { ObjectID } from 'bson';
import { Post } from '../models';
const postController = {
    async create_post(req, res) {
        let postDetails = req.body;
        const { title, description, author, user_id } = postDetails
        console.log(postDetails);
        const post = new Post({
            title,
            description,
            author,
            user_id
        })
        try {
            let result = await post.save();
            console.log("result :", result.user_id.toString());
            res.send({ "mess": "post created successfully !!" })
        } catch (error) {
            console.log("error while fetching data");
            res.json({
                "erro": "Error while post data"
            })
        }
    },

    async get_post(req, res) {
        console.log("request :", req.params.id);
        let isExist = await Post.find({ 'user_id': ObjectID(req.params.id) }).select('-_id -user_id -createdAt -updatedAt -__v');;
        if (isExist) {
            res.json({ "mess": "list of posts", "data": isExist })

        }
        else {
            res.json({ "mess": "list of posts", "data": isExist })
        }
    }
}

export default postController;