import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
    const pricePerCm3 = 15;
    const basePrice = 500;
    const price = Math.round(basePrice + volume * pricePerCm3);

    setCalculatedPrice(price);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за обращение!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
  };

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
            <a href="#calculator" className="hover:text-primary transition-colors">
              Калькулятор
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Галерея
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
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
              <a
                href="#services"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#calculator"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Калькулятор
              </a>
              <a
                href="#gallery"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Галерея
              </a>
              <a
                href="#faq"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <a
                href="tel:+79937266600"
                className="text-primary font-semibold hover:text-primary/80 transition-colors py-2 border-t border-border mt-2 pt-4"
              >
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
                  <Icon name="Printer" size={24} className="text-primary" />
                </div>
                <CardTitle>Высокое качество</CardTitle>
                <CardDescription>
                  Печать на современных принтерах до 256x256x256 мм с использованием
                  качественных материалов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up [animation-delay:100ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={24} className="text-secondary" />
                </div>
                <CardTitle>Раскраска своими руками</CardTitle>
                <CardDescription>
                  Белый пластик + набор красок (6 цветов) и 3 кисточки — БЕСПЛАТНО в комплекте
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up [animation-delay:200ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <CardTitle>Бесплатная доставка</CardTitle>
                <CardDescription>
                  По России, Беларуси, Казахстану, Армении, Кыргызстану, Узбекистану
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up [animation-delay:300ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <CardTitle>Удобный график</CardTitle>
                <CardDescription>
                  Работаем ежедневно с 9:00 до 22:00 по Тюменскому времени
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up [animation-delay:400ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
                <CardDescription>
                  Переделка при необходимости, контроль на каждом этапе производства
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up [animation-delay:500ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-secondary" />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
                <CardDescription>
                  Прототипы, хобби-модели, дизайнерские и промышленные изделия
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-3xl">Калькулятор стоимости</CardTitle>
              <CardDescription>
                Введите размеры вашего изделия в сантиметрах для расчёта стоимости
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
                    onChange={(e) =>
                      setDimensions({ ...dimensions, length: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width">Ширина (см)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="10"
                    value={dimensions.width}
                    onChange={(e) =>
                      setDimensions({ ...dimensions, width: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Высота (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="10"
                    value={dimensions.height}
                    onChange={(e) =>
                      setDimensions({ ...dimensions, height: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button onClick={calculatePrice} className="w-full" size="lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <div className="bg-primary/10 border border-primary rounded-lg p-6 text-center animate-scale-in">
                  <p className="text-muted-foreground mb-2">Примерная стоимость:</p>
                  <p className="text-4xl font-bold text-primary">
                    {calculatedPrice.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Точная цена рассчитывается индивидуально
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея работ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/1396aa57-f052-4943-9e90-f3517a9d0161.jpg"
                alt="3D модели"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Коллекция моделей</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl animate-fade-in [animation-delay:100ms]">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/f8430a48-35e5-4382-9020-20107be8f923.jpg"
                alt="Процесс печати"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Процесс работы</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl animate-fade-in [animation-delay:200ms]">
              <img
                src="https://cdn.poehali.dev/projects/1241bf9b-3fdf-4979-b3bf-197124e02ce8/files/6e21114b-35c3-4ddd-8693-aafdee7d8dc1.jpg"
                alt="Оборудование"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Наше оборудование</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Почему так дорого?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Цена обусловлена ручной работой и использованием высококачественных
                материалов. Каждое изделие создается с вниманием к деталям
                специалистами, что обеспечивает превосходное качество. Создание прототипа
                или фигурки — это не быстрый процесс, а результат высокой точности и
                индивидуального подхода. Поэтому цена справедлива за такой уровень
                качества и работы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Какие материалы вы используете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы используем высококачественный PLA и ABS пластик, а также специальный
                белый пластик для раскраски. Все материалы сертифицированы и безопасны.
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

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Свяжитесь с нами</CardTitle>
              <CardDescription>
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш проект..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <h3 className="font-semibold text-lg">Другие способы связи:</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+79937266600"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name="Phone" size={20} />
                    <span>+7 993 726-66-00</span>
                  </a>
                  <a
                    href="https://t.me/levo_del"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name="Send" size={20} />
                    <span>Telegram-канал: @levo_del</span>
                  </a>
                  <a
                    href="https://t.me/levodel_maksim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name="MessageCircle" size={20} />
                    <span>Для заказов: @levodel_maksim</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Box" size={24} className="text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Levodel studio</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Профессиональная 3D-печать. Качество и внимание к деталям.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Levodel studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;