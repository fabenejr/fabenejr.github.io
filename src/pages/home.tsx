import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel
} from "react-icons/si"
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6"
import profileImage from '@/assets/images/profilebeach.jpg'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const TechItem = ({ icon: Icon, label, color }: { icon: any; label: string; color: string }) => (
  <motion.div
    variants={item}
    className={`flex items-center gap-2 ${color} px-3 py-1.5 rounded-md bg-background/50 backdrop-blur-sm border`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
)

const SocialLink = ({ href, icon: Icon, color }: { href: string; icon: any; color: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`${color}`}
  >
    <Button variant="ghost" size="icon">
      <Icon className="w-5 h-5" />
    </Button>
  </motion.a>
)

export function HomePage() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.div variants={item}>
        <Card className="bg-card">
          <div className="p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 relative group">
              {/* Outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 animate-avatar-glow"></div>
              
              {/* Inner container with hover effect */}
              <motion.div 
                className="relative"
                animate={{ 
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 0.98, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Avatar className="w-32 h-32 rounded-full ring-2 ring-card">
                  <AvatarImage 
                    src={profileImage}
                    alt="Paulo Fabene"
                    className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                  />
                  <AvatarFallback>PF</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
            
            <div className="flex-grow space-y-4">
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Paulo Fabene
                </h1>
                <p className="text-muted-foreground">{t('header.role')}</p>
                <p className="text-muted-foreground">{t('header.location')}</p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <TechItem icon={SiReact} label="React" color="text-sky-500" />
                <TechItem icon={SiTypescript} label="TypeScript" color="text-blue-500" />
                <TechItem icon={SiNextdotjs} label="Next.js" color="text-foreground" />
                <TechItem icon={SiTailwindcss} label="Tailwind" color="text-teal-500" />
                <TechItem icon={SiNodedotjs} label="Node.js" color="text-green-500" />
                <TechItem icon={SiPrisma} label="Prisma" color="text-indigo-500" />
              </motion.div>

              <div className="flex gap-2">
                <SocialLink 
                  href="https://www.linkedin.com/in/paulofabene/"
                  icon={FaLinkedin}
                  color="text-[#0077B5] hover:text-[#0077B5]/80"
                />
                <SocialLink 
                  href="https://github.com/fabenejr"
                  icon={FaGithub}
                  color="text-foreground hover:text-foreground/80"
                />
                <SocialLink 
                  href="https://twitter.com/fabenejr"
                  icon={FaXTwitter}
                  color="text-foreground hover:text-foreground/80"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={item}>
          <Card className="bg-card h-full">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{t('about.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.description')}</p>
                <p>{t('about.passion')}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-card h-full">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{t('skills.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-3">{t('skills.frontend')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <TechItem icon={SiReact} label="React" color="text-sky-500" />
                    <TechItem icon={SiNextdotjs} label="Next.js" color="text-foreground" />
                    <TechItem icon={SiTypescript} label="TypeScript" color="text-blue-500" />
                    <TechItem icon={SiTailwindcss} label="Tailwind" color="text-teal-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-3">{t('skills.backend')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <TechItem icon={SiNodedotjs} label="Node.js" color="text-green-500" />
                    <TechItem icon={SiPrisma} label="Prisma" color="text-indigo-500" />
                    <TechItem icon={SiMongodb} label="MongoDB" color="text-green-600" />
                    <TechItem icon={SiPostgresql} label="PostgreSQL" color="text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-3">{t('skills.tools')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <TechItem icon={SiGit} label="Git" color="text-orange-500" />
                    <TechItem icon={SiDocker} label="Docker" color="text-blue-600" />
                    <TechItem icon={SiVercel} label="Vercel" color="text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}