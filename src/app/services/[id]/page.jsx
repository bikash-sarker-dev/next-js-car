import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;

  const servicesCollection = dbConnect(collectionNames.CARS_SERVICES);
  const singleService = await servicesCollection.findOne({
    _id: new ObjectId(id),
  });

  return <div>{JSON.stringify(singleService)}</div>;
};

export default ServiceDetailsPage;
