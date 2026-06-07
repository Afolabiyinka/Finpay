import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion";


const TryItNow = () => {
    return (
        <div className="min-h-[60vh] p-4  md:p-24 md:w-full">
            <motion.div

                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.7, }}
                exit={{ scale: 0.9 }}
                viewport={{ amount: 0.6 }}
                className="bg-[#023347]  flex  flex-col md:flex-row gap-10 justify-center items-center md:w-full h-full md:px-20 md:py-16 p-6 rounded-xl">
                <span className="md:w-[50%] space-y-4 h-full text-white p-3">
                    <h3 className="text-primary">TRY IT NOW</h3>
                    <h1 className="text-3xl font-bold">Ready to level up your <br /> payment process?</h1>
                    <p>Supports small businesses with simple invoicing, powerful  <br />intergrations, and cash flow management tools.</p>
                </span>
                <span className="w-[50%] h-full flex items-center justify-center gap-4">
                    <Button size={`lg`}>
                        Get Started Now
                    </Button>
                    <Button variant={`outline`} size={`lg`} className="text-white">
                        Learn More <ArrowUpRight />
                    </Button>
                </span>
            </motion.div>
        </div>
    )
}

export default TryItNow
