import React, { useState, useEffect, useRef } from 'react';
import { Code, Trophy, Clock, CheckCircle2, Pause, Play, RotateCcw, Sparkles, Flame, Moon, Sun, Database } from 'lucide-react';

const codeSnippets = {
  python: [
    'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
    'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height',
    'lambda_func = lambda x, y: x * y + 10\nresult = lambda_func(5, 3)\nprint(f"Result: {result}")',
    'numbers = [1, 2, 3, 4, 5]\nsquared = [x**2 for x in numbers if x % 2 == 0]\nprint(squared)',
    'try:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Error: {e}")\nfinally:\n    print("Cleanup")',
    'with open("data.txt", "r") as file:\n    for line in file:\n        print(line.strip())',
    'import json\ndata = {"name": "Alice", "age": 30}\njson_str = json.dumps(data, indent=2)',
    '@decorator\ndef greet(name):\n    return f"Hello, {name}!"\nprint(greet("World"))',
    'def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    return quicksort(left) + [pivot] + quicksort([x for x in arr if x > pivot])',
    'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        pass',
    'import asyncio\nasync def main():\n    await asyncio.sleep(1)\n    print("Done")\nasyncio.run(main())',
    'from functools import reduce\nnums = [1, 2, 3, 4]\nproduct = reduce(lambda x, y: x * y, nums)',
    'def decorator(func):\n    def wrapper(*args):\n        print("Before")\n        result = func(*args)\n        print("After")\n        return result\n    return wrapper',
    'my_dict = {"a": 1, "b": 2}\nfor key, value in my_dict.items():\n    print(f"{key}: {value}")',
    'my_list = [1, 2, 3, 4, 5]\neven = list(filter(lambda x: x % 2 == 0, my_list))',
    'def generator():\n    for i in range(5):\n        yield i * 2\nfor num in generator():\n    print(num)',
    'class Person:\n    count = 0\n    def __init__(self, name):\n        self.name = name\n        Person.count += 1',
    'import re\npattern = r"\\d+"\ntext = "I have 2 apples and 3 oranges"\nmatches = re.findall(pattern, text)',
    'def merge_dicts(d1, d2):\n    return {**d1, **d2}\nresult = merge_dicts({"a": 1}, {"b": 2})',
    'my_set = {1, 2, 3, 4, 5}\nmy_set.add(6)\nmy_set.remove(1)\nprint(my_set)',
    'from datetime import datetime\nnow = datetime.now()\nformatted = now.strftime("%Y-%m-%d %H:%M:%S")',
    'try:\n    x = int(input("Enter number: "))\nexcept ValueError:\n    print("Invalid input")',
    'def factorial(n):\n    return 1 if n <= 1 else n * factorial(n-1)\nprint(factorial(5))',
    'import random\nnumbers = [1, 2, 3, 4, 5]\nrandom.shuffle(numbers)\nprint(numbers)',
    'def is_palindrome(s):\n    s = s.lower().replace(" ", "")\n    return s == s[::-1]',
    'my_tuple = (1, 2, 3, 4, 5)\na, *rest, b = my_tuple\nprint(a, rest, b)',
    'def count_words(text):\n    words = text.split()\n    return len(words)\nresult = count_words("Hello world")',
    'class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)',
    'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1',
    'import math\ndef distance(x1, y1, x2, y2):\n    return math.sqrt((x2-x1)**2 + (y2-y1)**2)',
  ],
  javascript: [
    'const fetchUsers = async () => {\n  try {\n    const response = await fetch("/api/users");\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error("Error:", error);\n  }\n};',
    'function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n}',
    'const users = [\n  { name: "Alice", age: 30 },\n  { name: "Bob", age: 25 }\n];\nconst names = users.map(u => u.name);',
    'const promise = new Promise((resolve) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\npromise.then(r => console.log(r));',
    'const arr = [1, 2, 3, 4, 5];\nconst sum = arr.reduce((acc, val) => acc + val, 0);\nconsole.log(sum);',
    'function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nfor (const val of generator()) {\n  console.log(val);\n}',
    'const obj = { a: 1, b: 2, c: 3 };\nconst { a, ...rest } = obj;\nconsole.log(a, rest);',
    'class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n  on(event, listener) {\n    if (!this.events[event]) this.events[event] = [];\n    this.events[event].push(listener);\n  }\n}',
    'const flattenArray = (arr) => {\n  return arr.reduce((acc, val) => \n    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);\n};',
    'const throttle = (func, limit) => {\n  let inThrottle;\n  return function() {\n    if (!inThrottle) {\n      func.apply(this, arguments);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n};',
    'const deepClone = (obj) => {\n  return JSON.parse(JSON.stringify(obj));\n};',
    'const capitalize = (str) => {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n};',
    'const unique = (arr) => {\n  return [...new Set(arr)];\n};',
    'const factorial = (n) => {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n};',
    'const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};',
    'const isPalindrome = (str) => {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return cleaned === cleaned.split("").reverse().join("");\n};',
    'const groupBy = (arr, key) => {\n  return arr.reduce((acc, item) => {\n    (acc[item[key]] = acc[item[key]] || []).push(item);\n    return acc;\n  }, {});\n};',
    'const curry = (fn) => {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return (...moreArgs) => curried.apply(this, args.concat(moreArgs));\n  };\n};',
    'const compose = (...fns) => {\n  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);\n};',
    'const memoize = (fn) => {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n};',
    'const chunk = (arr, size) => {\n  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>\n    arr.slice(i * size, i * size + size)\n  );\n};',
    'const sleep = (ms) => {\n  return new Promise(resolve => setTimeout(resolve, ms));\n};',
    'const randomInt = (min, max) => {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};',
    'const isEqual = (a, b) => {\n  return JSON.stringify(a) === JSON.stringify(b);\n};',
    'const pipe = (...fns) => {\n  return (x) => fns.reduce((acc, fn) => fn(acc), x);\n};',
    'const once = (fn) => {\n  let called = false;\n  let result;\n  return (...args) => {\n    if (!called) {\n      called = true;\n      result = fn(...args);\n    }\n    return result;\n  };\n};',
    'const pick = (obj, keys) => {\n  return keys.reduce((acc, key) => {\n    if (obj.hasOwnProperty(key)) acc[key] = obj[key];\n    return acc;\n  }, {});\n};',
    'const omit = (obj, keys) => {\n  return Object.keys(obj)\n    .filter(key => !keys.includes(key))\n    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});\n};',
    'const range = (start, end) => {\n  return Array.from({ length: end - start + 1 }, (_, i) => start + i);\n};',
    'const shuffle = (arr) => {\n  const newArr = [...arr];\n  for (let i = newArr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];\n  }\n  return newArr;\n};',
  ],
  typescript: [
    'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst getUser = async (id: number): Promise<User> => {\n  const res = await fetch(`/users/${id}`);\n  return res.json();\n};',
    'type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };\n\nfunction divide(a: number, b: number): Result<number, string> {\n  if (b === 0) return { ok: false, error: "Div by zero" };\n  return { ok: true, value: a / b };\n}',
    'enum Status {\n  Pending = "PENDING",\n  Active = "ACTIVE",\n  Completed = "COMPLETED"\n}\n\ninterface Task {\n  id: string;\n  status: Status;\n}',
    'class Observable<T> {\n  private observers: Array<(value: T) => void> = [];\n  subscribe(observer: (value: T) => void) {\n    this.observers.push(observer);\n  }\n}',
    'type DeepPartial<T> = {\n  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];\n};',
    'function memoize<T extends (...args: any[]) => any>(fn: T): T {\n  const cache = new Map();\n  return ((...args: any[]) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  }) as T;\n}',
    'interface Logger {\n  log(message: string): void;\n}\n\nclass ConsoleLogger implements Logger {\n  log(msg: string) { console.log(msg); }\n}',
    'type Nullable<T> = T | null;\ntype Optional<T> = T | undefined;',
    'const processData = async <T>(items: T[]): Promise<T[]> => {\n  return items.filter(item => item !== null);\n};',
    'class Stack<T> {\n  private items: T[] = [];\n  push(item: T) { this.items.push(item); }\n  pop() { return this.items.pop(); }\n}',
  ],
  java: [
    'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    'public class Person {\n    private String name;\n    private int age;\n    \n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}',
    'public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n    public int multiply(int a, int b) {\n        return a * b;\n    }\n}',
    'try {\n    int result = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Error: " + e.getMessage());\n}',
    'List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> squared = numbers.stream()\n    .map(n -> n * n)\n    .collect(Collectors.toList());',
    'public enum Day {\n    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY\n}',
    'public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) instance = new Singleton();\n        return instance;\n    }\n}',
    'public interface Repository<T> {\n    void save(T entity);\n    T findById(Long id);\n    List<T> findAll();\n}',
    'public class LinkedList<T> {\n    private Node<T> head;\n    private static class Node<T> {\n        T data;\n        Node<T> next;\n    }\n}',
    'public abstract class Animal {\n    protected String name;\n    public abstract String makeSound();\n}',
  ],
  cpp: [
    '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}',
    '#include <vector>\nvector<int> nums = {1, 2, 3, 4, 5};\nfor (const auto& num : nums) {\n    cout << num << " ";\n}',
    'template <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}',
    'class Rectangle {\nprivate:\n    double width, height;\npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    double area() { return width * height; }\n};',
    'int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}',
    'struct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};',
    '#include <algorithm>\nvector<int> v = {3, 1, 4, 1, 5};\nsort(v.begin(), v.end());',
    'void swap(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}',
    '#include <map>\nmap<string, int> ages;\nages["Alice"] = 30;\nages["Bob"] = 25;',
    'template <typename T>\nclass Stack {\nprivate:\n    vector<T> elements;\npublic:\n    void push(T elem) { elements.push_back(elem); }\n};',
  ],
  go: [
    'package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
    'func fibonacci(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return fibonacci(n-1) + fibonacci(n-2)\n}',
    'type Person struct {\n    Name string\n    Age  int\n}\n\nfunc (p Person) Greet() string {\n    return "Hi, I am " + p.Name\n}',
    'func add(a, b int) int {\n    return a + b\n}\n\nresult := add(5, 3)',
    'numbers := []int{1, 2, 3, 4, 5}\nfor _, num := range numbers {\n    fmt.Println(num)\n}',
    'func divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New("division by zero")\n    }\n    return a / b, nil\n}',
    'ch := make(chan int)\ngo func() {\n    ch <- 42\n}()\nvalue := <-ch',
    'type Shape interface {\n    Area() float64\n}\n\ntype Circle struct {\n    Radius float64\n}',
    'defer func() {\n    if r := recover(); r != nil {\n        fmt.Println("Recovered:", r)\n    }\n}()',
    'var wg sync.WaitGroup\nfor i := 0; i < 5; i++ {\n    wg.Add(1)\n    go func(id int) {\n        defer wg.Done()\n        fmt.Println(id)\n    }(i)\n}\nwg.Wait()',
  ],
  rust: [
    'fn main() {\n    println!("Hello, world!");\n}',
    'fn fibonacci(n: u32) -> u32 {\n    match n {\n        0 => 0,\n        1 => 1,\n        _ => fibonacci(n - 1) + fibonacci(n - 2),\n    }\n}',
    'struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}',
    'let numbers = vec![1, 2, 3, 4, 5];\nlet sum: i32 = numbers.iter().sum();',
    'enum Result<T, E> {\n    Ok(T),\n    Err(E),\n}',
    'trait Drawable {\n    fn draw(&self);\n}\n\nstruct Circle {\n    radius: f64,\n}',
    'let v = vec![1, 2, 3];\nlet first = v.get(0);\nmatch first {\n    Some(value) => println!("{}", value),\n    None => println!("Empty"),\n}',
    'fn main() {\n    let numbers: Vec<i32> = (1..=10)\n        .filter(|x| x % 2 == 0)\n        .collect();\n}',
    'struct Point<T> {\n    x: T,\n    y: T,\n}\n\nimpl<T> Point<T> {\n    fn new(x: T, y: T) -> Self {\n        Point { x, y }\n    }\n}',
    'use std::collections::HashMap;\n\nlet mut scores = HashMap::new();\nscores.insert("Alice", 95);',
  ],
  php: [
    '<?php\nfunction greet($name) {\n    return "Hello, " . $name;\n}\necho greet("World");\n?>',
    '<?php\nclass Person {\n    private $name;\n    private $age;\n    \n    public function __construct($name, $age) {\n        $this->name = $name;\n        $this->age = $age;\n    }\n}\n?>',
    '<?php\n$numbers = [1, 2, 3, 4, 5];\n$squared = array_map(function($n) {\n    return $n * $n;\n}, $numbers);\n?>',
    '<?php\ntry {\n    $result = 10 / 0;\n} catch (DivisionByZeroError $e) {\n    echo "Error: " . $e->getMessage();\n}\n?>',
    '<?php\nfunction factorial($n) {\n    return ($n <= 1) ? 1 : $n * factorial($n - 1);\n}\n?>',
    '<?php\n$fruits = ["apple", "banana", "orange"];\nforeach ($fruits as $fruit) {\n    echo $fruit . PHP_EOL;\n}\n?>',
    '<?php\ninterface Logger {\n    public function log($message);\n}\n\nclass ConsoleLogger implements Logger {\n    public function log($message) {\n        echo $message;\n    }\n}\n?>',
    '<?php\n$data = ["name" => "Alice", "age" => 30];\n$json = json_encode($data);\necho $json;\n?>',
    '<?php\nfunction isEven($n) {\n    return $n % 2 === 0;\n}\n\n$numbers = [1, 2, 3, 4, 5];\n$even = array_filter($numbers, "isEven");\n?>',
    '<?php\nabstract class Animal {\n    abstract public function makeSound();\n}\n\nclass Dog extends Animal {\n    public function makeSound() {\n        return "Woof!";\n    }\n}\n?>',
  ],
  ruby: [
    'def greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("World")',
    'class Person\n  attr_accessor :name, :age\n  \n  def initialize(name, age)\n    @name = name\n    @age = age\n  end\nend',
    'numbers = [1, 2, 3, 4, 5]\nsquared = numbers.map { |n| n * n }\nputs squared.inspect',
    'def factorial(n)\n  return 1 if n <= 1\n  n * factorial(n - 1)\nend',
    'fruits = ["apple", "banana", "orange"]\nfruits.each do |fruit|\n  puts fruit\nend',
    'begin\n  result = 10 / 0\nrescue ZeroDivisionError => e\n  puts "Error: #{e.message}"\nend',
    'class Animal\n  def initialize(name)\n    @name = name\n  end\n  \n  def speak\n    raise NotImplementedError\n  end\nend',
    'hash = { name: "Alice", age: 30 }\nputs hash[:name]',
    'def is_even?(n)\n  n % 2 == 0\nend\n\nnumbers = [1, 2, 3, 4, 5]\neven = numbers.select { |n| is_even?(n) }',
    'module Greetable\n  def greet\n    "Hello from #{self.class.name}"\n  end\nend',
  ],
  swift: [
    'func greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\nprint(greet(name: "World"))',
    'struct Person {\n    var name: String\n    var age: Int\n    \n    func greet() -> String {\n        return "Hi, I am \\(name)"\n    }\n}',
    'let numbers = [1, 2, 3, 4, 5]\nlet squared = numbers.map { $0 * $0 }',
    'func factorial(_ n: Int) -> Int {\n    return n <= 1 ? 1 : n * factorial(n - 1)\n}',
    'enum Result<T, E> {\n    case success(T)\n    case failure(E)\n}',
    'class Animal {\n    var name: String\n    init(name: String) {\n        self.name = name\n    }\n}',
    'protocol Drawable {\n    func draw()\n}\n\nstruct Circle: Drawable {\n    func draw() {\n        print("Drawing circle")\n    }\n}',
    'let fruits = ["apple", "banana", "orange"]\nfor fruit in fruits {\n    print(fruit)\n}',
    'func divide(_ a: Double, by b: Double) throws -> Double {\n    guard b != 0 else {\n        throw DivisionError.divisionByZero\n    }\n    return a / b\n}',
    'let dict = ["name": "Alice", "age": "30"]\nif let name = dict["name"] {\n    print(name)\n}',
  ],
  kotlin: [
    'fun main() {\n    println("Hello, World!")\n}',
    'data class Person(val name: String, val age: Int)',
    'fun greet(name: String): String {\n    return "Hello, $name!"\n}',
    'val numbers = listOf(1, 2, 3, 4, 5)\nval squared = numbers.map { it * it }',
    'fun factorial(n: Int): Int {\n    return if (n <= 1) 1 else n * factorial(n - 1)\n}',
    'class Rectangle(val width: Int, val height: Int) {\n    fun area(): Int = width * height\n}',
    'sealed class Result<out T> {\n    data class Success<T>(val value: T) : Result<T>()\n    data class Error(val message: String) : Result<Nothing>()\n}',
    'interface Logger {\n    fun log(message: String)\n}\n\nclass ConsoleLogger : Logger {\n    override fun log(message: String) {\n        println(message)\n    }\n}',
    'fun <T> List<T>.second(): T? {\n    return if (size >= 2) this[1] else null\n}',
    'val fruits = listOf("apple", "banana", "orange")\nfruits.forEach { println(it) }',
  ],
};

const DevTypingPractice = () => {
  const [isDark, setIsDark] = useState(true);
  const [selectedLang, setSelectedLang] = useState('javascript');
  const [currentSnippet, setCurrentSnippet] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [pausedTime, setPausedTime] = useState(0);
  const [stats, setStats] = useState({ wpm: 0, cpm: 0, accuracy: 0 });
  const [showResults, setShowResults] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [sessionStats, setSessionStats] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [activeUsers, setActiveUsers] = useState(67);
  const inputRef = useRef(null);
  const pauseStartRef = useRef(null);

  // Initialize session stats for all languages
  useEffect(() => {
    const initialStats = {};
    Object.keys(codeSnippets).forEach(lang => {
      initialStats[lang] = { best: 0, attempts: 0 };
    });
    
    // Load from localStorage
    const saved = localStorage.getItem('devtype_stats');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSessionStats(parsed);
      const savedCompleted = localStorage.getItem('devtype_completed');
      if (savedCompleted) setCompletedCount(parseInt(savedCompleted));
      const savedStreak = localStorage.getItem('devtype_streak');
      if (savedStreak) setStreak(parseInt(savedStreak));
    } else {
      setSessionStats(initialStats);
    }
  }, []);

  // Save to localStorage whenever stats change
  useEffect(() => {
    if (Object.keys(sessionStats).length > 0) {
      localStorage.setItem('devtype_stats', JSON.stringify(sessionStats));
      localStorage.setItem('devtype_completed', completedCount.toString());
      localStorage.setItem('devtype_streak', streak.toString());
    }
  }, [sessionStats, completedCount, streak]);

  // Update active users every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadNewSnippet();
  }, [selectedLang]);

  useEffect(() => {
    let interval;
    if (isTyping && !endTime && !isPaused) {
      interval = setInterval(() => {
        setCurrentTime(Date.now() - startTime - pausedTime);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isTyping, startTime, endTime, isPaused, pausedTime]);

  const loadNewSnippet = () => {
    const snippets = codeSnippets[selectedLang];
    const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    setCurrentSnippet(randomSnippet);
    setUserInput('');
    setIsTyping(false);
    setIsPaused(false);
    setStartTime(null);
    setEndTime(null);
    setPausedTime(0);
    setShowResults(false);
    setCurrentTime(0);
  };

  const handlePause = () => {
    if (!isTyping) return;
    
    if (isPaused) {
      setPausedTime(prev => prev + (Date.now() - pauseStartRef.current));
      setIsPaused(false);
    } else {
      pauseStartRef.current = Date.now();
      setIsPaused(true);
    }
  };

  const handleReset = () => {
    loadNewSnippet();
  };

  const handleInputChange = (e) => {
    if (isPaused) return;
    
    const value = e.target.value;
    
    if (!isTyping && value.length > 0) {
      setIsTyping(true);
      setStartTime(Date.now());
    }

    setUserInput(value);

    if (value === currentSnippet) {
      const end = Date.now();
      setEndTime(end);
      setIsTyping(false);
      calculateStats(end);
    }
  };

  const calculateStats = (end) => {
    const timeInMinutes = ((end - startTime - pausedTime) / 60000);
    const words = currentSnippet.split(/\s+/).length;
    const characters = currentSnippet.length;
    
    const wpm = Math.round(words / timeInMinutes);
    const cpm = Math.round(characters / timeInMinutes);
    
    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === currentSnippet[i]) correctChars++;
    }
    const accuracy = Math.round((correctChars / currentSnippet.length) * 100);

    setStats({ wpm, cpm, accuracy });
    setShowResults(true);
    setCompletedCount(prev => prev + 1);

    if (accuracy >= 95) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setSessionStats(prev => ({
      ...prev,
      [selectedLang]: {
        best: Math.max(prev[selectedLang]?.best || 0, wpm),
        attempts: (prev[selectedLang]?.attempts || 0) + 1
      }
    }));
  };

  const getCharStatus = (index) => {
    if (index >= userInput.length) return 'pending';
    return userInput[index] === currentSnippet[index] ? 'correct' : 'incorrect';
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}s`;
  };

  const handleContinue = () => {
    loadNewSnippet();
  };

  const clearProgress = () => {
    if (window.confirm('Are you sure you want to clear all progress?')) {
      localStorage.removeItem('devtype_stats');
      localStorage.removeItem('devtype_completed');
      localStorage.removeItem('devtype_streak');
      const initialStats = {};
      Object.keys(codeSnippets).forEach(lang => {
        initialStats[lang] = { best: 0, attempts: 0 };
      });
      setSessionStats(initialStats);
      setCompletedCount(0);
      setStreak(0);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`border-b ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} sticky top-0 z-50 backdrop-blur-sm bg-opacity-95`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-600' : 'bg-blue-500'} animate-pulse`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">DevType</h1>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Master Your Coding Speed</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Active Users Counter */}
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${isDark ? 'bg-green-500 bg-opacity-20 border-green-500' : 'bg-green-100 border-green-400'}`}>
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-bold text-green-500">{activeUsers} Active</span>
              </div>
              
              {streak > 0 && (
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${isDark ? 'bg-orange-500 bg-opacity-20 border-orange-500' : 'bg-orange-100 border-orange-400'} animate-bounce`}>
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-bold">{streak} Streak!</span>
                </div>
              )}
              
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-3 rounded-lg transition-all transform hover:scale-110 ${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Language Selector */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Select Programming Language
              </label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(codeSnippets).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedLang === lang
                        ? isDark
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-500 text-white'
                        : isDark
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <div className={`mt-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {codeSnippets[selectedLang].length} snippets available
              </div>
            </div>

            {/* Typing Area */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="font-mono text-xl font-bold">{formatTime(currentTime)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePause}
                    disabled={!isTyping || showResults}
                    className={`p-2 rounded-lg transition-all ${
                      isTyping && !showResults
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        : isDark
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all text-white"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {isPaused && (
                <div className={`mb-4 p-4 rounded-lg text-center ${isDark ? 'bg-yellow-500 bg-opacity-20 border border-yellow-500' : 'bg-yellow-100 border border-yellow-400'}`}>
                  <span className="font-bold">⏸️ Paused - Click play to continue</span>
                </div>
              )}

              {/* Code Display - Enhanced */}
              <div className={`relative rounded-lg p-6 mb-4 font-mono text-xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border-2 border-gray-300'}`}>
                <div className="whitespace-pre-wrap break-words leading-loose tracking-wide">
                  {currentSnippet.split('').map((char, index) => {
                    const status = getCharStatus(index);
                    return (
                      <span
                        key={index}
                        className={`font-bold transition-all ${
                          status === 'correct'
                            ? 'text-green-500'
                            : status === 'incorrect'
                            ? 'text-red-500 bg-red-500 bg-opacity-30 px-1 rounded'
                            : isDark
                            ? 'text-gray-300'
                            : 'text-gray-700'
                        }`}
                        style={{ fontSize: '1.15rem' }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Input Area */}
              <textarea
                ref={inputRef}
                value={userInput}
                onChange={handleInputChange}
                disabled={showResults}
                placeholder="Start typing the code above..."
                className={`w-full h-48 p-4 rounded-lg font-mono text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark
                    ? 'bg-gray-900 text-gray-100 border border-gray-700'
                    : 'bg-white text-gray-900 border-2 border-gray-300'
                } ${showResults ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            </div>

            {/* Results */}
            {showResults && (
              <div className={`rounded-xl p-6 ${isDark ? 'bg-gradient-to-br from-blue-900 to-purple-900 border border-blue-700' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-300'}`}>
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-bold">Challenge Complete! 🎉</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-70'}`}>
                    <div className="text-sm mb-1 opacity-75">Speed</div>
                    <div className="text-2xl font-bold">{stats.wpm} WPM</div>
                    <div className="text-xs opacity-75">{stats.cpm} CPM</div>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-70'}`}>
                    <div className="text-sm mb-1 opacity-75">Accuracy</div>
                    <div className="text-2xl font-bold">{stats.accuracy}%</div>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-70'}`}>
                    <div className="text-sm mb-1 opacity-75">Time</div>
                    <div className="text-2xl font-bold">{formatTime(endTime - startTime - pausedTime)}</div>
                  </div>
                </div>
                
                <button
                  onClick={handleContinue}
                  className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
                    isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Continue to Next Snippet →
                </button>
                
                <div className="mt-4 text-center text-sm opacity-75">
                  Completed: {completedCount} challenges
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-lg">Session Progress</h3>
                </div>
                <button
                  onClick={clearProgress}
                  className="text-xs text-red-500 hover:text-red-600"
                >
                  <Database className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Completed</span>
                  <span className="font-bold text-2xl">{completedCount}</span>
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Keep going! Practice as much as you want! 🚀
                </div>
              </div>
            </div>

            {/* Current Language Stats */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <h3 className="font-bold text-lg mb-4">Current Language</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Language</span>
                  <span className="font-semibold text-blue-500">{selectedLang}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Attempts</span>
                  <span className="font-semibold">{sessionStats[selectedLang]?.attempts || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Best WPM</span>
                  <span className="font-semibold text-green-500">{sessionStats[selectedLang]?.best || 0}</span>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <h3 className="font-bold text-lg">Personal Best</h3>
              </div>
              <div className="space-y-2">
                {Object.entries(sessionStats)
                  .sort((a, b) => b[1].best - a[1].best)
                  .map(([lang, data], index) => (
                    <div
                      key={lang}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        isDark ? 'bg-gray-700' : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`font-bold ${
                          index === 0 ? 'text-yellow-500' : 
                          index === 1 ? 'text-gray-400' : 
                          index === 2 ? 'text-orange-600' : 
                          isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          #{index + 1}
                        </span>
                        <span className="font-medium">{lang}</span>
                      </div>
                      <span className={`font-bold ${
                        data.best > 0 ? 'text-blue-500' : isDark ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {data.best || '-'} WPM
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Tips */}
            <div className={`rounded-xl p-6 ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900 to-pink-900 border border-purple-700' 
                : 'bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-300'
            }`}>
              <h3 className="font-bold mb-3 flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Pro Tips</span>
              </h3>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                <li>• Use Pause (⏸️) for breaks</li>
                <li>• Reset (↻) anytime for new snippet</li>
                <li>• Focus on accuracy over speed</li>
                <li>• Practice different languages</li>
                <li>• Build streak with 95%+ accuracy</li>
                <li>• Progress is saved automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} mt-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-lg">DevType</h3>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Master your coding speed with real programming language snippets. Practice, improve, and become a faster developer.
              </p>
            </div>

            {/* Quick Stats */}
            <div>
              <h3 className="font-bold text-lg mb-4">Platform Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Snippets:</span>
                  <span className="font-bold text-blue-500">100+</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Languages:</span>
                  <span className="font-bold text-blue-500">{Object.keys(codeSnippets).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Active Users:</span>
                  <span className="font-bold text-green-500 transition-all duration-300">{activeUsers}</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    About DevType
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    How to Practice
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Keyboard Shortcuts
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Report Issue
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} mt-8 pt-6 text-center`}>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 DevType. Built with ❤️ for developers. Made by developers, for developers.
            </p>
            <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Practice makes perfect • Keep coding • Stay awesome 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevTypingPractice;