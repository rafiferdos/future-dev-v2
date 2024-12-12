"use client";

import React from "react";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          প্রবেশ করুন / Log In
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            label="ইমেইল / Email"
            labelPlacement="outside"
            name="email"
            placeholder="ইমেইল লিখুন / Enter email here"
            type="email"
            variant="bordered"
          />
          <Input
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
            label="পাসওয়ার্ড / Password"
            labelPlacement="outside"
            name="password"
            placeholder="পাসওয়ার্ড লিখুন / Enter password here"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Button color="primary" type="submit">
            প্রবেশ করুন / Log In
          </Button>
        </form>
        {/* <p className="text-center text-small">
          <Link href="#" size="sm">
            পাসওয়ার্ড ভুলে গেছেন? / Forgot your password?
          </Link>
        </p> */}
      </div>
    </div>
  );
}
