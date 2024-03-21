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
        <DeleteIcon
          className="absolute hidden text-xl top-7 right-12 group-hover:grid"
          onClick={() => handleDeleteForm(index)}
        />
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
        <AddCircleIcon className="-mr-2 text-2xl text-gray-500" />
      </div>
    </div>
  );
};

export default FormRenderer;
