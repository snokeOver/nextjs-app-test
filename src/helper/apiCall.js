import axios from "axios";

const getServices = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/services/api/get-all`
    );
    return data.response;
  } catch (error) {
    return [];
  }
};

const getServiceDetails = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/services/api/${id}`
    );
    return data.res;
  } catch (error) {
    return [];
  }
};

export { getServices, getServiceDetails };
