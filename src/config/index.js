import axios from "axios";
import { Form } from "bold-ui";
import { FORM_ERROR } from "final-form";
import moment from "moment";
import "moment/locale/pt-br";
import qs from "qs";

export * from "./history";

export default () => {
  moment.locale("pt-BR");

  axios.defaults.paramsSerializer = params => {
    return qs.stringify(params, {
      skipNulls: true,
      allowDots: true,
      encode: false,
      arrayFormat: "repeat"
    });
  };

  Form.defaultProps.onSubmitFailed = errors => {
    // tslint:disable-next-line:no-console
    console.error("Erro inesperado ao submeter form", errors);
  };

  Form.defaultProps.transformResult = result => {
    if (!result) {
      return result;
    }

    if (isPromise(result)) {
      return result
        .then(res => Promise.resolve())
        .catch(error => {
          if (error && error.response && error.response.status === 400) {
            return Promise.resolve(error.response.data);
          } else {
            return Promise.resolve({
              [FORM_ERROR]: error && error.reponse && error.response.data
            });
          }
        });
    }
  };
};

const isPromise = arg => {
  return arg.catch !== undefined;
};
