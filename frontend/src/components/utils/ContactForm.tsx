export function ContactForm() {
  return (
    <form className="m-0 p-0">
      <div className="flex flex-col">
        <label className="mb-5 text-white font-bold text-2xl" htmlFor="name">
          Name
        </label>
        <input
          className="bg-rocket-connect-lightgrey w-4/6 h-12"
          type="text"
          name="name"
          id="name"
        />
        <label className="my-5 text-white font-bold text-2xl" htmlFor="email">
          Email
        </label>
        <input
          className="bg-rocket-connect-lightgrey w-4/6 h-12"
          type="email"
          name="email"
          id="email"
        />
        <label className="my-5 text-white font-bold text-2xl" htmlFor="message">
          Message
        </label>
        <textarea
          className="bg-rocket-connect-lightgrey w-4/6"
          name="message"
          id="message"
          cols={30}
          rows={15}
        />
        <button
          type="submit"
          className="mt-5 italic text-lg bg-rocket-connect-lightgrey submit w-1/5 py-2 underline decoration-rocket-connect-lightblue underline-offset-8"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
