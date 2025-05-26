import dbConnect, { collectionNames } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

const Services = async () => {
  const servicesCollection = dbConnect(collectionNames.CARS_SERVICES);
  const data = await servicesCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((service) => (
        <div key={service._id} className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              unoptimized={true}
              src={service.img}
              alt="Picture of the author"
              width={300}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {service.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>

            <div className="card-actions justify-end">
              <Link
                className="btn btn-primary"
                href={`/services/${service._id}`}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
