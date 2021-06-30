import Link from 'next/link';

const Layout = ({ children }) => (
    <>
        <div className="bg-gray-900 py-2 mb-12">
            <h1 className="text-3xl h-12 ml-4 font-semibold leading-normal tracking-wide text-gray-100 inline-block float-left">mealmate</h1>

            <div className="inline-block float-right h-12 table">
                <Link href="/"><a className="text-gray-100 no-underline text-sm px-4 table-cell align-middle">Home</a></Link>
                <Link href="/meal-plan"><a className="text-gray-100 no-underline text-sm px-4 table-cell align-middle">Meal Plan</a></Link>
                <Link href="/meals"><a className="text-gray-100 no-underline text-sm px-4 table-cell align-middle">All Meals</a></Link>
            </div>

            <div className="clear-both"></div>
        </div>

        <div className="md:container md:mx-auto text-center">
            {children}
        </div>
    </>
);

export default Layout;
