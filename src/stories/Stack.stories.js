import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => {
      return (
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {n + 1}
        </div>
      );
    })}
  </Stack>
);

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};
