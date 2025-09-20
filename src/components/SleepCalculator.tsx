import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SleepCalculator = () => {
  const [mode, setMode] = useState<'wakeup' | 'bedtime'>('wakeup');
  const [selectedTime, setSelectedTime] = useState('07:00');
  const [results, setResults] = useState<string[]>([]);

  const calculateSleepTimes = (time: string, isWakeUpTime: boolean) => {
    const [hours, minutes] = time.split(':').map(Number);
    const targetTime = new Date();
    targetTime.setHours(hours, minutes, 0, 0);

    const sleepCycles = [1, 2, 3, 4, 5, 6]; // Number of sleep cycles
    const cycleLength = 90; // minutes per cycle
    const fallAsleepTime = 15; // minutes to fall asleep

    const times = sleepCycles.map(cycles => {
      const totalSleepTime = cycles * cycleLength + fallAsleepTime;
      const calculatedTime = new Date(targetTime);
      
      if (isWakeUpTime) {
        // Calculate bedtime from wake up time
        calculatedTime.setMinutes(calculatedTime.getMinutes() - totalSleepTime);
      } else {
        // Calculate wake up time from bedtime
        calculatedTime.setMinutes(calculatedTime.getMinutes() + totalSleepTime);
      }

      return calculatedTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    });

    setResults(times);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);
    calculateSleepTimes(newTime, mode === 'wakeup');
  };

  const handleModeChange = (newMode: 'wakeup' | 'bedtime') => {
    setMode(newMode);
    calculateSleepTimes(selectedTime, newMode === 'wakeup');
  };

  return (
    <section id="calculator" className="py-16 md:py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sleep Calculator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose whether you want to set your wake-up time or bedtime, and we'll calculate the optimal times based on 90-minute sleep cycles.
            </p>
          </div>

          {/* Calculator Card */}
          <Card className="border-2 border-border/50 shadow-xl bg-card">
            <CardContent className="p-8">
              {/* Mode Selection */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant={mode === 'wakeup' ? 'default' : 'outline'}
                  onClick={() => handleModeChange('wakeup')}
                  className="flex-1 h-12 bg-gradient-to-r from-primary to-primary/90"
                >
                  <Sun className="mr-2 h-4 w-4" />
                  I want to wake up at...
                </Button>
                <Button
                  variant={mode === 'bedtime' ? 'default' : 'outline'}
                  onClick={() => handleModeChange('bedtime')}
                  className="flex-1 h-12 bg-gradient-to-r from-primary to-primary/90"
                >
                  <Moon className="mr-2 h-4 w-4" />
                  I want to go to bed at...
                </Button>
              </div>

              {/* Time Input */}
              <div className="mb-8">
                <Label htmlFor="time" className="text-base font-medium mb-3 block">
                  {mode === 'wakeup' ? 'I want to wake up at:' : 'I want to go to bed at:'}
                </Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className="pl-10 h-12 text-lg border-2"
                  />
                </div>
              </div>

              {/* Results */}
              {results.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Your Recommended Sleep Times
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {results.map((time, index) => (
                      <Card 
                        key={index} 
                        className="bg-sleep-time-bg hover:bg-sleep-time-hover transition-colors cursor-pointer group border border-sleep-card-border"
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-lg font-bold text-primary group-hover:scale-105 transition-transform">
                            {time}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {mode === 'wakeup' ? 'Go to bed at' : 'Wake up at'}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {index + 1} cycle{index !== 0 ? 's' : ''} • {((index + 1) * 1.5).toFixed(1)}h
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    These times are based on 90-minute sleep cycles. It usually takes about 15 minutes to fall asleep.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SleepCalculator;