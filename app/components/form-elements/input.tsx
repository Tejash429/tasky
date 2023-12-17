interface Props {
  title: string;
  type?: string;
  placeholder: string;
}

export default function Input({ title, placeholder, type }: Props) {
  return (
    <label className='form-control w-full mb-4 '>
      <div className='label'>
        <span className='label-text font-semibold'>{title}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered w-full  '
      />
    </label>
  );
}
