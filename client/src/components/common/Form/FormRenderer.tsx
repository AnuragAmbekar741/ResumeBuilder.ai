import { Typography } from "@mui/material";
import { useState, FC, ReactElement } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

interface FormRendererProps {
  FormComponent: FC;
  label: string;
}

const FormRenderer: FC<FormRendererProps> = ({ FormComponent, label }) => {
  const [forms, setForms] = useState<ReactElement[]>([]);

  const handleCreateForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      <FormComponent key={prevForms.length} />,
    ]);
  };

  const handleDeleteForm = (index: number) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  const renderForms = (): ReactElement[] => {
    return forms.map((form, index) => (
      <div key={index} className="relative flex group">
        {form}
        <button className="p-[1.3rem] hidden rounded-lg h-7 w-7 bg-slate-100 top-[1.6rem] right-16 absolute group-hover:grid">
          <DeleteIcon
            className="absolute text-2xl left-[0.6rem] top-[0.6rem]"
            onClick={() => handleDeleteForm(index)}
          />
        </button>
      </div>
    ));
  };

  return (
    <div>
      {renderForms()}
      <div
        onClick={handleCreateForm}
        className="flex justify-between px-5 py-3 mt-5 border rounded-lg cursor-pointer hover:shadow-md border-slate-100 hover:bg-gradient-to-r from-slate-50 "
      >
        <Typography className="text-lg text-[#2a96fb]">{label}</Typography>
        <AddCircleIcon className="-mr-2 text-2xl text-gray-400" />
      </div>
    </div>
  );
};

export default FormRenderer;
