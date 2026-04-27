"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg mb-2">Liste des tâches</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="text-md !text-gray-800 dark:!bg-white  "
          >
            <Calendar1Icon />
            {date ? (
              format(date, "dd MMM yyyy", { locale: fr })
            ) : (
              <span>Choisir Date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-100 mt-4 overflow-y-auto">
        {/* fieldgroup */}
        <div className="flex flex-col mt-4 gap-4 p-2">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, unde!
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
