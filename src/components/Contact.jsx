
function Contact() {
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>

        <div className="flex flex-col items-center justify-center mt-6">
          <form
            action="https://getform.io/f/aroxnleb"
            method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">
              Send the Message
            </h1>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700">Full Name</label>
              <input
                className="shadow rounded-lg border w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700">Email Address</label>
              <input
                className="shadow rounded-lg border w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-4">
              <label className="text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg border w-full py-2 px-3 text-gray-700 focus:outline-none"
                name="message"
                placeholder="Type your query"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-4 py-2 hover:bg-slate-700 duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
