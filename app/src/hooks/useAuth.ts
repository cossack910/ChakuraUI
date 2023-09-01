import { useCallback } from "react";
import axios from "axios";
import User from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "loginOK", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "loginNG", status: "warning" });
          }
        })
        .catch(() => showMessage({ title: "loginNG", status: "error" }))
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate]
  );
  return { login, loading };
};
