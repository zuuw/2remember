import DonateForm from "@/components/DonateForm";


export default function DonatePage() {
return (
<div className="min-h-screen flex flex-col items-center justify-center p-6 ">
<h1 className="text-4xl font-bold mb-6 text-center">Donate to 2Remember</h1>
<p className="max-w-xl text-center mb-8 text-gray-700">
Your donation helps raise awareness and support individuals and families affected by dementia and Alzheimer’s.
</p>
<DonateForm />
</div>
);
}