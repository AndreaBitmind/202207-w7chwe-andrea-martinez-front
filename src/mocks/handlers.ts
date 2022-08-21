import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_BASE_URL}users/register`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            userName: "pusky",
            password: "46581",
            image: "imagen.png",
          },
        ])
      );
    }
  ),
];
