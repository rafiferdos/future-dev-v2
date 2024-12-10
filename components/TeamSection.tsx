import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react'

const TeamSection = () => {
  return (
    <div id="team" className="w-full bg-primary-100 dark:bg-primary-50 flex justify-between items-center rounded-3xl p-10">
      <div className='w-2/3'>
        <h2 className="mb-5 font-extrabold  text-5xl">
          Join Our Team
        </h2>
        <p>
          Join Learn HQ and help shape the future of education with innovation
          solutions.
        </p>
      </div>
      <div>
        <Link href={""}>
          <Button color="secondary" >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default TeamSection