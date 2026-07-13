import HomeLanding from '@/components/HomeLanding/HomeLanding';
import { getHeaderData } from '@/lib/queries/header';
import { getHomeData } from '@/lib/queries/home';

export default async function Home() {
  const [headerData, data] = await Promise.all([getHeaderData(), getHomeData()]);

  return <HomeLanding data={data} headerData={headerData} />;
}
