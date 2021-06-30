import { signIn, signOut, useSession } from 'next-auth/client';

const HomePage = () => {
    const [session, loading] = useSession();

    return (
        <>
            { !session &&
                <div className="pb-4 max-w-md mx-auto">
                    <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">Sign In</h2>

                    <button
                        type="submit"
                        className="mt-2 block w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white tracking-wide font-semibold py-2 p-4 cursor-pointer shadow-md"
                        disabled={loading}
                        onClick={() => signIn('cognito', {
                            callbackUrl: `${window.location.origin}/meal-plan`
                        })}
                    >
                        Sign In
                    </button>
                </div>
            }
            { session &&
                <div className="pb-4 max-w-md mx-auto">
                    <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">Welcome back, {session.user.name}!</h2>
                    <button
                        type="submit"
                        className="mt-2 block w-full rounded-md bg-red-600 hover:bg-red-700 text-white tracking-wide font-semibold py-2 p-4 cursor-pointer shadow-md"
                        disabled={loading}
                        onClick={() => signOut({
                            callbackUrl: `${window.location.origin}`
                        })}
                    >
                        Sign Out
                    </button>
                </div>
            }
        </>
    );
};

export default HomePage;