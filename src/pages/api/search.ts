import { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/api";

async function search(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;

  try {
    const { data } = await api.get(`/search/track?limit=15&q=${q}`);

    res.json(data);
  } catch (e) {
    res.status(400).send(e);
  }
}

export default search;
