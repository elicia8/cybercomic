import Layout from "./Layout";
import certificate from "./assets/certificate/certificate.png"
export default function Certificates() {
    return (
        <Layout>
            <div className="relative flex flex-col gap-10 p-10">
                <h1 className="px64">Congratulations</h1>
                <p className="medium">
                    For finishing your course!!!
                </p>
                <img src={certificate} alt="certificate" className="text-glow"/>
            </div>
        </Layout>
    );
}
