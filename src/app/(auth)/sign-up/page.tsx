import SignInForm from '@/components/form/SignInForm';
import SignUpForm from '@/components/form/SignUpForm';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const page = () => {
  return (
    <div className='flex items-center justify-center bg-dark-900 mt-20 '>
      <div className='flex flex-col items-center md:flex-row md:items-stretch mx-12 md:mx-28 space-y-8 md:space-y-0 md:space-x-12 mb-36'>
      <h1 className='text-center text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-52'>
      Sign up today to gain access to our platform and unlock a world of opportunities.
        </h1>
        <Card className="w-full max-w-md rounded-xl shadow-lg  bg-slate-900  border-slate-400">
          <CardHeader>
            <CardTitle className="text-white text-center text-xl">Sign-Up</CardTitle>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
          <CardFooter>
            {/* Add any footer content here if needed */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
