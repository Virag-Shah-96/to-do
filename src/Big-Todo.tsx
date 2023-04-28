import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  TodoTask: string;
  description: string;
  time: any;
};

export const BigTodo: React.FC = () => {
  const from = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex align-middle justify-center"
      >
        <input
          className="border-2 border-orange-300 m-4"
          type="text"
          placeholder="Enter Todo title"
          {...register("TodoTask")}
        />
        <textarea
          className="border-2 border-orange-300 m-4"
          placeholder="Enter Description"
          {...register("description")}
        />
        <input
          className="border-2 border-orange-300 m-4"
          type="time"
          placeholder="Enter Estimate Time"
          {...register("time")}
        />

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <input
          type="submit"
          className=" border-2 border-orange-300 m-4 p-2 rounded-xl"
        />
      </form>
    </div>
  );
};
