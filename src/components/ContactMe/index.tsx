import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
    formState: { errors },
  } = useForm<inputsFormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<inputsFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col relative justify-evenly items-center text-center md:text-left md:flex-row max-w-7xl px-3 md:px-10 mx-auto">
      <h3 className="absolute top-14 hidden md:inline uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col gap-8 md:gap-10 w-full mx-auto">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Contact me for more information.{' '}
          <span className="decoration-primary underline whitespace-nowrap">
            Lets talk!
          </span>
        </h4>

        <div className="flex flex-col justify-center items-center gap-2 md:gap-6">
          <div className="flex items-center justify-center gap-4">
            <Phone
              size={32}
              weight="fill"
              className="text-primary animate-pulse"
            />
            <p className="text-xl md:text-2xl">+5591980448461</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <MapPin
              size={32}
              weight="fill"
              className="text-primary animate-pulse"
            />
            <p className="text-xl md:text-2xl">Pará - Brazil</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <EnvelopeSimple
              size={32}
              weight="duotone"
              className="text-primary animate-pulse"
            />
            <p className="text-xl md:text-2xl">tashiro.dev@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-fit mx-auto"
        >
          <div className="flex gap-2 flex-wrap">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput resize-none"
            rows={6}
          />
          <button
            type="submit"
            className="bg-primary py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
