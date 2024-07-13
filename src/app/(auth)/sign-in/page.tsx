import SignInForm from '@/components/form/SignInForm';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const page = () => {
  return (
    <div className='flex items-center justify-center bg-dark-900 mt-20'>
      <div className='flex flex-col items-center md:flex-row md:items-stretch mx-12 md:mx-28 space-y-8 md:space-y-0 md:space-x-12'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-32">
          Sign in and enjoy access to exclusive features tailored to your needs.
        </h1>
        <Card className="w-full max-w-md  rounded-xl shadow-lg bg-gray-900  border-slate-400">
          <CardHeader>
            <CardTitle className="text-white text-center text-xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
