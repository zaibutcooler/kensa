const PricingSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          Pricing Plan
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 dark:text-gray-300 xl:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-12">
          <div className="w-full space-y-8 rounded-lg border border-gray-100 p-8 text-center dark:border-gray-700">
            <p className="font-medium uppercase text-gray-500 dark:text-gray-300">
              Free
            </p>

            <h2 className="text-5xl font-bold uppercase text-gray-800 dark:text-gray-100">
              $0
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Life time
            </p>

            <button className="mt-10 w-full transform rounded-md bg-indigo-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>

          <div className="w-full space-y-8 rounded-lg bg-indigo-600 p-8 text-center">
            <p className="font-medium uppercase text-gray-200">Premium</p>

            <h2 className="text-5xl font-bold uppercase text-white dark:text-gray-100">
              $40
            </h2>

            <p className="font-medium text-gray-200">Per month</p>

            <button className="mt-10 w-full transform rounded-md bg-white px-4 py-2 capitalize tracking-wide text-indigo-500 transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-80">
              Start Now
            </button>
          </div>

          <div className="w-full space-y-8 rounded-lg border border-gray-100 p-8 text-center dark:border-gray-700">
            <p className="font-medium uppercase text-gray-500 dark:text-gray-300">
              Enterprise
            </p>

            <h2 className="text-5xl font-bold uppercase text-gray-800 dark:text-gray-100">
              $100
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Life time
            </p>

            <button className="mt-10 w-full transform rounded-md bg-indigo-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
