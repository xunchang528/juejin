import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { CMSDOMAIN } from "../../utils";

interface IHomeProps {
  title: string;
  description: string;
  authorName:string;
}

const getHomeData = (req: NextApiRequest, res: NextApiResponse<IHomeProps>) => {
  axios.get(`${CMSDOMAIN}/api/homes`).then((result) => {
    const { title, description,authorName } = result.data || {};

    res.status(200).json({
      title,
      description,
      authorName
    });
  });
};

export default getHomeData;