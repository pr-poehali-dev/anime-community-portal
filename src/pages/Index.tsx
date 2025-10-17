import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface AnimeThread {
  id: number;
  title: string;
  author: string;
  avatar: string;
  replies: number;
  views: number;
  category: string;
  isHot: boolean;
}

interface UserProfile {
  name: string;
  avatar: string;
  favorites: string[];
  posts: number;
  joined: string;
}

const Index = () => {
  const [threads] = useState<AnimeThread[]>([
    {
      id: 1,
      title: "Лучшие аниме сезона 2025",
      author: "OtakuMaster",
      avatar: "🌸",
      replies: 142,
      views: 2340,
      category: "Обсуждения",
      isHot: true,
    },
    {
      id: 2,
      title: "Атака титанов - финальная глава",
      author: "ErenYeager",
      avatar: "⚔️",
      replies: 256,
      views: 4521,
      category: "Обсуждения",
      isHot: true,
    },
    {
      id: 3,
      title: "Рекомендации для новичков",
      author: "AnimeGuide",
      avatar: "📚",
      replies: 87,
      views: 1230,
      category: "Рекомендации",
      isHot: false,
    },
    {
      id: 4,
      title: "Японские традиции в аниме",
      author: "CultureFan",
      avatar: "🎌",
      replies: 64,
      views: 890,
      category: "Культура",
      isHot: false,
    },
  ]);

  const [currentUser] = useState<UserProfile>({
    name: "AnimeUser",
    avatar: "🦊",
    favorites: ["Стальной Алхимик", "Ванпанчмен", "Моя геройская академия"],
    posts: 234,
    joined: "2024",
  });

  return (
    <div className="min-h-screen">
      <header className="border-b border-primary/20 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎌</div>
              <h1 className="text-3xl font-bold text-primary neon-text">
                ANIME HUB
              </h1>
            </div>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary neon-glow hover:bg-primary/10">
                <Icon name="Home" className="mr-2" size={20} />
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-secondary neon-glow hover:bg-secondary/10">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Форум
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent neon-glow hover:bg-accent/10">
                <Icon name="User" className="mr-2" size={20} />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="discussions" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-primary/20">
                <TabsTrigger 
                  value="discussions"
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  🔥 Горячее
                </TabsTrigger>
                <TabsTrigger 
                  value="recommendations"
                  className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                >
                  ⭐ Рекомендации
                </TabsTrigger>
                <TabsTrigger 
                  value="culture"
                  className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent"
                >
                  🎎 Культура
                </TabsTrigger>
              </TabsList>

              <TabsContent value="discussions" className="mt-6 space-y-4">
                {threads.map((thread) => (
                  <Card
                    key={thread.id}
                    className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(255,46,151,0.3)] cursor-pointer backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 bg-primary/20 flex items-center justify-center text-2xl border-2 border-primary/50">
                        {thread.avatar}
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {thread.isHot && (
                            <Badge className="bg-primary/20 text-primary border-primary/50 neon-glow">
                              HOT
                            </Badge>
                          )}
                          <Badge variant="outline" className="border-muted text-muted-foreground">
                            {thread.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors">
                          {thread.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="text-secondary">@{thread.author}</span>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={16} />
                            {thread.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={16} />
                            {thread.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="recommendations" className="mt-6">
                <Card className="p-8 bg-card/50 border-secondary/20 text-center">
                  <Icon name="Star" size={48} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">Раздел рекомендаций</h3>
                  <p className="text-muted-foreground">Скоро здесь появятся лучшие рекомендации от сообщества</p>
                </Card>
              </TabsContent>

              <TabsContent value="culture" className="mt-6">
                <Card className="p-8 bg-card/50 border-accent/20 text-center">
                  <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">Японская культура</h3>
                  <p className="text-muted-foreground">Изучайте традиции и культуру Японии вместе с нами</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="User" className="text-primary" />
                Мой профиль
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16 bg-primary/20 flex items-center justify-center text-3xl border-2 border-primary/50 neon-glow">
                  {currentUser.avatar}
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{currentUser.name}</h4>
                  <p className="text-sm text-muted-foreground">Участник с {currentUser.joined}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сообщений:</span>
                  <span className="text-primary font-semibold">{currentUser.posts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Избранное:</span>
                  <span className="text-secondary font-semibold">{currentUser.favorites.length}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-secondary/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="Heart" className="text-secondary" />
                Избранные аниме
              </h3>
              <div className="space-y-3">
                {currentUser.favorites.map((anime, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20 hover:border-secondary/50 transition-all cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full neon-glow"></div>
                    <span className="text-sm">{anime}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-accent/20 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" className="text-accent" />
                Топ обсуждений
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent font-bold text-lg">1</span>
                  <span>Новый сезон One Piece</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent font-bold text-lg">2</span>
                  <span>Топ-10 OP персонажей</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent font-bold text-lg">3</span>
                  <span>Аниме vs манга</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-primary/20 bg-black/40 backdrop-blur-md mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <span className="text-2xl">🎌</span>
            Made with <Icon name="Heart" size={16} className="text-primary" /> for anime community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
