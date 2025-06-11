import { BrandGithub, BrandLinkedin } from "@/components/icons/brand";

export default function Contact() {
  return (
    <div className="w-full  flex flex-col md:flex-row px-4 gap-8 items-stretch justify-between">
      <div className="w-full md:w-[40%] h-fit gap-12 flex flex-col items-center md:items-start justify-start">
        <h2 className="font-title text-2xl md:text-4xl text-blue-light xl:text-8xl font-bold">
          Get in <span className="md:block md:pl-44">Touch</span>
        </h2>
        <div className="w-full h-fit flex flex-col items-start justify-start gap-8 md:gap-16">
          <p className="text-blue text-lg md:text-2xl">
            Send me any message and I’ll try to get back to you whenever I can!
          </p>
          <p className="text-blue text-lg md:text-2xl">
            I need your <strong>Name</strong> and <strong>Email Address</strong>
            , but you won’t receive anything other than your reply.
          </p>
        </div>

        <div className="w-full h-fit flex flex-row gap-8 items-center justify-center md:justify-start">
          <div className="size-[3.5rem] flex flex-col items-center justify-center border-[3px] border-blue-light">
            <BrandLinkedin className="fill-black size-[1.5rem] md:size-[2rem] " />
          </div>

          <div className="size-[3.5rem] flex flex-col items-center justify-center border-[3px] border-blue-light">
            <BrandGithub className="fill-black size-[1.5rem] md:size-[2rem] " />
          </div>
        </div>
      </div>

      <div className="w-full md:w-fit h-auto flex flex-col items-start justify-between gap-8">
        <h2 className="font-semibold text-2xl ">Send Me a Message</h2>
        <form className="w-full h-fit flex flex-col items-start justify-start gap-4">
          <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center gap-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="rounded-2xl border-blue-light w-full placeholder:text-blue-light border-2 px-4 py-3"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="rounded-2xl border-blue-light w-full placeholder:text-blue-light border-2 px-4 py-3"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-2xl border-blue-light placeholder:text-blue-light border-2 px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-[200px] rounded-2xl border-blue-light placeholder:text-blue-light border-2 px-4 py-3"
          />
        </form>
        <button
          type="submit"
          className="w-fit px-8 h-fit rounded-2xl bg-blue-light py-3 text-white"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
