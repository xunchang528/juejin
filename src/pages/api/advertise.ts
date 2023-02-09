import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { CMSDOMAIN } from "../../utils";

interface IAdvertiseProps {
  AdUrl: Array<{ attributes: { AdImg:{ data: {attributes: {url: string} }} } }>;
}

const getAdData = (
  req: NextApiRequest,
  res: NextApiResponse<IAdvertiseProps>
): void => {
  axios.get(`${CMSDOMAIN}/api/ads?populate=*`).then((result) => {
    const data = result.data.data || {};
    console.log(data)
    res.status(200).json(data);
  });
};

export default getAdData;
