// src/pages/SignupPage.jsx

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300 p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
          <h3 className="text-center font-extralight">Enter your info to create an account</h3>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
            <Input type="text" placeholder="Username" required />
            <Input type="password" placeholder="Password" required />

            <Button type="submit" className="mt-4 w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
