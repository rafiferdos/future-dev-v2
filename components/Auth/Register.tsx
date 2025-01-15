"use client";
import React from "react";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function Register() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
    <div className="flex h-full w-full items-center justify-center font-siliguri">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          অ্যাকাউন্ট খুলুন / Sign Up
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            isRequired
            label="আপনার সন্তানের নাম / Your Child's Name"
            labelPlacement="outside"
            name="username"
            placeholder="এখানে নাম লিখুন / Enter name here"
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label="আপনার নাম / Your Name"
            labelPlacement="outside"
            name="username"
            placeholder="এখানে নাম লিখুন / Enter name here"
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label="ইমেইল / Email"
            labelPlacement="outside"
            name="email"
            placeholder="ইমেইল লিখুন / Enter email here"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            label="আপনার সন্তানের সাথে আপনার সম্পর্ক কি? / What is your relationship
            with your child?"
            labelPlacement="outside"
            name="text"
            placeholder="এখানে লিখুন / Enter here"
            type="text"
            variant="bordered"
            className="pt-4"
          />
          <Input
            isRequired
            label="আপনার সন্তানের বয়স / Your Child's Age"
            labelPlacement="outside"
            name="number"
            placeholder="এখানে বয়স লিখুন / Enter age here"
            type="number"
            variant="bordered"
          />

          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleConfirmVisibility}>
                {isConfirmVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Confirm Password"
            labelPlacement="outside"
            name="confirmPassword"
            placeholder="Confirm your password"
            type={isConfirmVisible ? "text" : "password"}
            variant="bordered"
          />
          <Button color="primary" type="submit">
            অ্যাকাউন্ট খুলুন / Sign Up
          </Button>
        </form>
        <p className="text-center text-small">
          <Link href="/auth/login" size="sm">
            আপনার অ্যাকাউন্ট আছে? প্রবেশ করুন / Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
