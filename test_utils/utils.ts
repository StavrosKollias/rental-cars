export { render, act, waitFor, fireEvent } from "@testing-library/react";
export default "@testing-library/user-event";

import { render, act } from "@testing-library/react";

export const renderComponent = (component: any) => {
    return render(component);
};
