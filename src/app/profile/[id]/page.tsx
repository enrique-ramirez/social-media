export default async function Profile() {
  const res = await fetch("http://localhost:3000/api/user");
  const user = await res.json();

  return (<section className="container mx-auto m-8">
    <div className="grid grids-cols-4 sm:grid-cols-8 gap-6 px-4">
      <div className="col-span-4 sm:col-span-3">
        <div className="bg-base-100 shadow-md rounded-lg p-6">
          <div className="flex flex-col items-center">
            <img src={user.avatar} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="opacity-60 mb-2.5">{user.email}</p>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-5">
        <div className="bg-base-100 shadow-md rounded-lg p-6">
          <h2 className="font-bold uppercase mb-2">About Me</h2>
          <p>{user.about}</p>
        </div>
      </div>
    </div>
  </section>)
}
