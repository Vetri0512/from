import { FC, useCallback, useState } from "react";
import { From_data } from "../Types/modules_type";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Form_values } from "../Types/Inputs";
import Translate from "./Translate";
import { hide, visibility } from "../assets";
import { Error_messages } from "../Rules/validation";

const Form_inputs: FC<From_data> = ({
  Data,
  sx,
  is_button,
  onChange,
  value,
  error,
  Button_disable,
  on_submit,
}) => {
  const [show, setShow] = useState<
    Record<"confirm_password" | "password", boolean>
  >({
    confirm_password: true,
    password: true,
  });

  const handleVisibility = useCallback(
    (name: "confirm_password" | "password") => () => {
      setShow((prev) => ({
        ...prev,
        [`${name}`]: !prev?.[`${name}`],
      }));
    },
    []
  );
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ ...sx }}>
        <Box
          sx={{
            border: "1px solid",
            borderTopLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            p: 3,
          }}
        >
          <Translate
            id={`form_id_basic`}
            Variant="h5"
            defaultMessage="form"
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Box>
        <Box sx={{ borderLeft: "1px solid ", p: 2, borderRight: "1px solid" }}>
          {Data?.map((item: Form_values) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 2,
                alignItems: "baseline",
              }}
            >
              <Translate
                id={`form_id_${item}`}
                Variant="overline"
                defaultMessage={item}
              />
              <TextField
                autoComplete={"new-password"}
                name={item}
                type={
                  show?.[item as "confirm_password" | "password"]
                    ? "password"
                    : "text"
                }
                required
                label={
                  <Translate
                    id={`form_id_${item}`}
                    Variant="overline"
                    defaultMessage={item}
                  />
                }
                variant="filled"
                onChange={onChange}
                value={value?.[item]}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        {item
                          .toString()
                          ?.toLocaleLowerCase()
                          .includes("password") ? (
                          <IconButton
                            onClick={handleVisibility(
                              item as "confirm_password" | "password"
                            )}
                          >
                            <img
                              src={
                                show?.[item as "confirm_password" | "password"]
                                  ? hide
                                  : visibility
                              }
                            />
                          </IconButton>
                        ) : (
                          <Box sx={{ width: "40px" }}></Box>
                        )}
                      </InputAdornment>
                    ),
                  },
                }}
                error={error?.[`${item}`]}
                helperText={Error_messages(
                  item,
                  value?.[item],
                  error?.[`${item}`]
                )}
              />
            </Box>
          ))}
          {is_button ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Button
                color="primary"
                variant="contained"
                disabled={Button_disable()}
                onClick={on_submit}
              >
                {" "}
                submit
              </Button>
            </Box>
          ) : (
            <></>
          )}
        </Box>

        <Box
          sx={{
            border: "1px solid",
            borderBottomRightRadius: "40px",
            borderTopLeftRadius: "40px",
            p: 5,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Form_inputs;
