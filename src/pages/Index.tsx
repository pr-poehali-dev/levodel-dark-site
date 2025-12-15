import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const calculatePrice = () => {
    const { length, width, height } = dimensions;
    if (!length || !width || !height) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    const pricePerCm3 = 5;
    const basePrice = 200;
    const price = Math.round(basePrice + volume * pricePerCm3);

    setCalculatedPrice(price);
  };

  const newsItems = [
    {
      date: new Date().toLocaleDateString('ru-RU'),
      title: 'Новые материалы для 3D-печати',
      description: 'Добавили в работу прочный PETG и гибкий TPU для специальных задач',
      icon: 'Sparkles',
    },
    {
      date: new Date(Date.now() - 86400000).toLocaleDateString('ru-RU'),
      title: 'Ускоренное производство',
      description: 'Установили дополнительные принтеры — срок изготовления сокращён на 30%',
      icon: 'Zap',
    },
    {
      date: new Date(Date.now() - 172800000).toLocaleDateString('ru-RU'),
      title: 'Крупноформатная печать',
      description: 'Теперь печатаем изделия до 40x40x50 см на новом оборудовании',
      icon: 'Maximize',
    },
  ];

  const tips = [
    {
      title: 'Выбор материала',
      description: 'PLA подходит для декора, ABS — для функциональных деталей, PETG — для прочности и устойчивости к влаге',
      icon: 'Layers',
    },
    {
      title: 'Подготовка модели',
      description: 'Проверьте толщину стенок (минимум 1.2 мм) и добавьте поддержки для нависающих элементов',
      icon: 'FileCheck',
    },
    {
      title: 'Постобработка',
      description: 'Шлифовка, грунтовка и покраска улучшают внешний вид. Используйте ацетон для сглаживания ABS',
      icon: 'Wrench',
    },
    {
      title: 'Экономия бюджета',
      description: 'Заполнение 15-20% оптимально для большинства изделий. Полное заполнение нужно редко',
      icon: 'Wallet',
    },
  ];

  const portfolioCategories = [
    { id: 'all', name: 'Все работы', icon: 'LayoutGrid' },
    { id: 'home', name: 'Товары для дома', icon: 'Home' },
    { id: 'toys', name: 'Игрушки', icon: 'Gamepad2' },
    { id: 'auto', name: 'Авто аксессуары', icon: 'Car' },
    { id: 'popular', name: 'Популярное', icon: 'TrendingUp' },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'home',
      title: 'Органайзер для кабелей',
      description: 'Настенный держатель для организации проводов и зарядных устройств',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/753e47c5-dbc8-4944-aca9-f2b675dae4a7.jpg',
      tags: ['Органайзер', 'Функциональное'],
    },
    {
      id: 2,
      category: 'home',
      title: 'Держатель для кухонных принадлежностей',
      description: 'Компактная подставка для ложек, вилок и других кухонных инструментов',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/ffaf3782-2b60-4a01-9301-f9000f5b7a83.jpg',
      tags: ['Кухня', 'Практичное'],
    },
    {
      id: 3,
      category: 'home',
      title: 'Вазон для растений',
      description: 'Современный горшок с дренажной системой для комнатных растений',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/753e47c5-dbc8-4944-aca9-f2b675dae4a7.jpg',
      tags: ['Декор', 'Растения'],
    },
    {
      id: 4,
      category: 'home',
      title: 'Подставка для телефона',
      description: 'Регулируемая подставка с противоскользящим покрытием',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/ffaf3782-2b60-4a01-9301-f9000f5b7a83.jpg',
      tags: ['Гаджеты', 'Офис'],
    },
    {
      id: 5,
      category: 'toys',
      title: 'Конструктор для детей',
      description: 'Набор модульных деталей для развития креативности и моторики',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/0a2ff51f-e0c2-4442-8cb6-bc32bae53410.jpg',
      tags: ['Развивающее', 'Дети'],
    },
    {
      id: 6,
      category: 'toys',
      title: 'Фигурки персонажей',
      description: 'Коллекционные модели популярных героев мультфильмов и игр',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/0a2ff51f-e0c2-4442-8cb6-bc32bae53410.jpg',
      tags: ['Коллекция', 'Хобби'],
    },
    {
      id: 7,
      category: 'toys',
      title: 'Головоломки 3D',
      description: 'Механические пазлы различной сложности для всех возрастов',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/0a2ff51f-e0c2-4442-8cb6-bc32bae53410.jpg',
      tags: ['Логика', 'Семья'],
    },
    {
      id: 8,
      category: 'auto',
      title: 'Держатель телефона в авто',
      description: 'Универсальное крепление на дефлектор с поворотным механизмом',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/2bdb82eb-7827-473f-86e6-6f9274630043.jpg',
      tags: ['Автомобиль', 'Гаджеты'],
    },
    {
      id: 9,
      category: 'auto',
      title: 'Органайзер в багажник',
      description: 'Складная система хранения для организации пространства',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/2bdb82eb-7827-473f-86e6-6f9274630043.jpg',
      tags: ['Хранение', 'Порядок'],
    },
    {
      id: 10,
      category: 'auto',
      title: 'Подставка для стаканов',
      description: 'Держатель напитков с регулируемым диаметром',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/2bdb82eb-7827-473f-86e6-6f9274630043.jpg',
      tags: ['Комфорт', 'Аксессуары'],
    },
    {
      id: 11,
      category: 'popular',
      title: 'Настольный органайзер',
      description: 'Многофункциональная подставка для канцелярии и мелочей',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/ffaf3782-2b60-4a01-9301-f9000f5b7a83.jpg',
      tags: ['Офис', 'Популярное'],
    },
    {
      id: 12,
      category: 'popular',
      title: 'Брелок с индивидуальным дизайном',
      description: 'Персонализированные брелоки с именем или логотипом',
      image: 'https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/753e47c5-dbc8-4944-aca9-f2b675dae4a7.jpg',
      tags: ['Подарок', 'Персонализация'],
    },
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Box" size={24} className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Levodel studio</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#news" className="hover:text-primary transition-colors">
              Новости
            </a>
            <a href="#tips" className="hover:text-primary transition-colors">
              Советы
            </a>
            <a href="#calculator" className="hover:text-primary transition-colors">
              Калькулятор
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+79937266600"
              className="hidden sm:block text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              +7 993 726-66-00
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#services" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Портфолио</a>
              <a href="#news" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Новости</a>
              <a href="#tips" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Советы</a>
              <a href="#calculator" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Калькулятор</a>
              <a href="#faq" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="tel:+79937266600" className="text-primary font-semibold hover:text-primary/80 transition-colors py-2 border-t border-border mt-2 pt-4">
                +7 993 726-66-00
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Профессиональная <span className="text-primary">3D-печать</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Создаём прототипы, модели для хобби, дизайнерские и промышленные изделия
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://t.me/levo_del" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} />
                    Наш Telegram
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="#calculator">
                    <Icon name="Calculator" size={20} />
                    Рассчитать стоимость
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/6e21114b-35c3-4ddd-8693-aafdee7d8dc1.jpg"
                alt="3D принтер"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Box" size={24} className="text-primary" />
                </div>
                <CardTitle>Печать по вашим моделям</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Принимаем файлы STL, OBJ, 3MF. Быстрая печать на современном оборудовании с точностью до 0.1 мм
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <CardTitle>Разработка 3D-моделей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создадим модель по вашему описанию или чертежам. Оптимизируем существующие файлы для печати
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <CardTitle>Прототипирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Быстрое изготовление прототипов для тестирования идей и концепций перед запуском производства
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <CardTitle>Постобработка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Шлифовка, покраска, покрытие лаком. Придадим вашему изделию профессиональный вид
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Мелкосерийное производство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Изготовим партию идентичных изделий с контролем качества каждой единицы
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <CardTitle>Консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Поможем выбрать материал, оптимизировать модель и рассчитать стоимость вашего проекта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground text-lg">
              Примеры изделий, которые мы можем изготовить для вас
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card hover:bg-card/80 border border-border'
                }`}
              >
                <Icon name={category.icon} size={20} />
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Новости студии</h2>
            <p className="text-muted-foreground">Следите за нашими обновлениями и новинками</p>
          </div>

          <div className="space-y-6">
            {newsItems.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={news.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{news.date}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{news.title}</CardTitle>
                        <CardDescription className="text-base">{news.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Полезные советы</h2>
            <p className="text-muted-foreground">Рекомендации от наших специалистов</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={tip.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Калькулятор стоимости</CardTitle>
              <CardDescription>
                Рассчитайте примерную стоимость 3D-печати вашего изделия
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="length">Длина (см)</Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="10"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width">Ширина (см)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="10"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Высота (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="10"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                  />
                </div>
              </div>

              <Button onClick={calculatePrice} className="w-full" size="lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-2">Примерная стоимость:</p>
                  <p className="text-4xl font-bold text-primary">{calculatedPrice} ₽</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    * Итоговая цена зависит от сложности модели и выбранного материала
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея работ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/62819e9d-4dc8-49ad-baea-2d4a5f2b0878.jpg"
                alt="Пример работы 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/b8d2e1c5-3b28-4f76-bf4f-c831e4d50baf.jpg"
                alt="Пример работы 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/8c868d91-d8cd-491c-89f3-ba3bac85afec.jpg"
                alt="Пример работы 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/f32e8c14-08bc-462f-8c91-8e2a3c7b5eed.jpg"
                alt="Пример работы 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/b8d2e1c5-3b28-4f76-bf4f-c831e4d50baf.jpg"
                alt="Пример работы 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/62819e9d-4dc8-49ad-baea-2d4a5f2b0878.jpg"
                alt="Пример работы 6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Какие материалы вы используете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы работаем с PLA, ABS, PETG, TPU и другими материалами. PLA подходит для
                декоративных изделий, ABS — для функциональных деталей, PETG — для прочных изделий,
                TPU — для гибких элементов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Какие форматы файлов вы принимаете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Принимаем файлы в форматах STL, OBJ, 3MF. Если у вас другой формат или нет готовой
                модели — свяжитесь с нами, поможем с подготовкой.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Сколько времени занимает изготовление?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Время изготовления зависит от сложности и размера изделия. Обычно от 2 до
                7 дней. Точные сроки мы сообщаем после анализа вашего заказа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Предоставляете ли вы гарантию?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы гарантируем качество наших изделий. Если обнаружится брак по нашей
                вине, мы бесплатно переделаем заказ. Контроль качества проводится на
                каждом этапе производства.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли заказать по своей 3D-модели?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы принимаем файлы в форматах STL, OBJ, 3MF. Если у вас нет готовой
                модели, можем помочь с её созданием за дополнительную плату.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Box" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Levodel studio</h3>
              </div>
              <p className="text-muted-foreground">
                Профессиональная 3D-печать для ваших проектов и идей
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <a href="tel:+79937266600" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  +7 993 726-66-00
                </a>
                <a href="https://t.me/levo_del" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Send" size={18} />
                  Telegram: @levo_del
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб-Вс: 11:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Levodel studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
