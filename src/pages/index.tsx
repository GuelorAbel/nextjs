import Seo from '@/design/components/Seo'
import Typography from '@/design/design-syst/typography/Typography'

export default function Home() {
  return (
    <>
        <Seo title="APP-Acceuil"/>
        {/* 
        <Typography component="h2" variant="h2">Bienvenue</Typography>
        <Typography component="h3" variant="h3">Bienvenue</Typography>
        <Typography component="h4" variant="h4">Bienvenue</Typography>
        <Typography component="h5" variant="h5">Bienvenue</Typography>
        <Typography variant="p">Bienvenue</Typography> */}
        <div className="container mx-auto pt-4 px-4 md:px-0">
                <Typography component="h1" variant="h1">Bienvenue</Typography>
                <Typography component="p" variant="p" className="w-full md:w-[55%] mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque minus aspernatur 
                  voluptate inventore sapiente nesciunt animi nulla, fugiat impedit quis provident earum 
                  commodi nobis, ab eius architecto deleniti asperiores dicta ea obcaecati!
                </Typography>
        </div>
    </>
  )
}
