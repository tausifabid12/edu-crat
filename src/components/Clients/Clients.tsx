import Image from 'next/image';
import React from 'react';

const Clients = () => {
  return (
    <section className="px-3 lg:px-16 py-32">
      <p className="text-primary text-center pb-5">
        Trusted by the world’s best
      </p>
      <div className="flex flex-wrap  w-full items-center justify-between space-y-8">
        <Image
          src="/assets/clients/2.svg"
          height={100}
          width={100}
          alt="client"
        />
        <Image
          src="/assets/clients/3.svg"
          height={100}
          width={100}
          alt="client"
        />
        <Image
          src="/assets/clients/4.svg"
          height={100}
          width={100}
          alt="client"
        />
        <Image
          src="/assets/clients/5.svg"
          height={100}
          width={100}
          alt="client"
        />
        <Image
          src="/assets/clients/1.svg"
          height={100}
          width={100}
          alt="client"
        />
        <Image
          src="/assets/clients/6.svg"
          height={100}
          width={100}
          alt="client"
        />
      </div>
    </section>
  );
};

export default Clients;
