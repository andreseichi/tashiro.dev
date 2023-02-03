import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

import { api } from "@/services/api";

import "react-toastify/dist/ReactToastify.min.css";

const schema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(3),
});

type inputsFormData = z.infer<typeof schema>;

export function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // TODO input error handler
  } = useForm<inputsFormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<inputsFormData> = async (data) => {
    api
      .post("/email", data)
      .then((response) => {
        if (response.status === 200) {
          const { message } = response.data;
          toast.success(message);
        }
      })
      .catch((error) => {
        const { message } = error.response.data;

        toast.error(message);
      });
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-evenly px-3 text-center md:flex-row md:px-10 md:text-left">
      <h3 className="absolute top-14 hidden text-2xl uppercase tracking-[20px] text-gray-500 md:inline">
        Contact
      </h3>

      <div className="mx-auto flex w-full flex-col gap-8 md:gap-10">
        <h4 className="text-center text-2xl font-semibold md:text-4xl">
          Contact me for more information.{" "}
          <span className="whitespace-nowrap underline decoration-primary">
            Lets talk!
          </span>
        </h4>

        <div className="flex flex-col items-center justify-center gap-2 md:gap-6">
          <div className="flex items-center justify-center gap-4">
            <Phone
              size={32}
              weight="fill"
              className="animate-pulse text-primary"
            />
            <p className="text-xl md:text-2xl">+5591980448461</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <MapPin
              size={32}
              weight="fill"
              className="animate-pulse text-primary"
            />
            <p className="text-xl md:text-2xl">Pará - Brazil</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <EnvelopeSimple
              size={32}
              weight="duotone"
              className="animate-pulse text-primary"
            />
            <p className="text-xl md:text-2xl">tashiro.dev@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col gap-2"
        >
          <div className="flex flex-wrap gap-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput resize-none"
            rows={6}
          />
          <button
            type="submit"
            className="rounded-md bg-primary py-4 px-10 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
