import { User } from "../../models";

import CustomErrorHandler from "../../services/customErrorHandler";

const userController = {
    async me(req, res, next) {
        try {
            const user = await User.findOne({ __id: req.user.__id }).select('-password -createdAt -updatedAt -__v');
            if (!user) {
                return next(CustomErrorHandler.notFound());
            }
            res.json(user);
        } catch (err) {
            return next(err);
        }
    },

    async post(req, res, next) {
        try {
            const res = await fetch(`http://localhost:8001/post/api/get_post/${req.user.__id}`);
            const post = res.json()
            if (!post) {
                return next(CustomErrorHandler.notFound());
            }
            res.json(post);
        } catch (err) {
            return next(err);
        }
    }
}

export default userController;