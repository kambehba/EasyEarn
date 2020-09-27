import { useState, useEffect } from "react";

const useForm = (joinGame, hostGame, validatePlayerName) => {
  const [values, setValues] = useState({
    playerName: "",
    gameSelection: "",
  });
  const [errors, setErrors] = useState({ playerName: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      gameSelection: event.target.name,
    });

    setErrors(validatePlayerName(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (values.gameSelection === "joinGame") joinGame(values.playerName);
      if (values.gameSelection === "hostGame") hostGame(values.playerName);
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
