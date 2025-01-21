import theme from "../../../tailwind.config.ts";

export const handler = {
  GET() {
    return new Response(JSON.stringify(["modern", "light"]));
  },
};
