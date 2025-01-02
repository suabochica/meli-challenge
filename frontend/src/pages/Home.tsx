import BreadCrumb from "@/components/BreadCrumb";

export default function Home() {
  return (
    <>
      <BreadCrumb categories={["Home", "Prueba", "Prueba2"]} />
      <h1>Home</h1>
    </>
  );
}
