import { rest } from "msw"

const baseURL = "https://drf-api-mw-9efbc86656ab.herokuapp.com/"

export const handlers = [
    rest.get('${baseURL}dj-rest-auth/user', (req, rest, ctx) => {
        return res(
            ctx.json({
                "pk": 6,
                "username": "Test1",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 6,
                "profile_image": "https://res.cloudinary.com/deoxxigyw/image/upload/v1/media/../default_profile_jkz9pu"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (resq, res, ctx) => {
        return res(ctx.status(200));
    }),
];