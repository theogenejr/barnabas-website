;<div className="flex flex-col gap-8">
  <div className="flex flex-col gap-8 md:flex-row">
    <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
      <input
        type="text"
        id="firstname"
        required
        className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
      />
      <label
        for="firstname"
        className="transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[-10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
      >
        First Name
        <span className="text-xs ml-2 text-gray-500">required</span>
      </label>
    </div>

    <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
      <input
        type="text"
        id="lastname"
        required
        className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
      />
      <label
        for="lastname"
        className="transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[-10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
      >
        Last Name
      </label>
    </div>
  </div>
  <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
    <input
      type="email"
      id="email_id"
      required
      className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
    />
    <label
      for="email_id"
      className="transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[-10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
    >
      Email <span className="text-xs ml-2 text-gray-500">required</span>
    </label>
  </div>

  <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
    <input
      type="text"
      id="subject"
      required
      className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
    />
    <label
      for="subject"
      className="transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[-10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
    >
      Subject
    </label>
  </div>

  <div className="w-full h-96 relative bg-white rounded-3xl px-8 py-8 flex items-start group">
    <textarea
      id="message"
      required
      className="w-full h-full px-4 text-sm peer bg-transparent outline-none"
    />
    <label
      for="message"
      className="transform transition-all absolute top-8 left-0 h-full uppercase font-extrabold flex items-start pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[-10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-12 peer-valid:pl-12"
    >
      message
    </label>
  </div>
</div>
