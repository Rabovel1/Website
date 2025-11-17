"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "header left-0 top-0 z-40 flex w-full items-center transition-all duration-300",
        sticky
          ? "fixed z-[9999] bg-background/80 backdrop-blur-md shadow-lg"
          : "absolute bg-transparent"
      )}
    >
      <div className="container">
        <div className="relative mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-60 max-w-full px-4 xl:mr-12"
          >
            <Link
              href="/"
              className={cn(
                "header-logo block w-full transition-all duration-300",
                sticky ? "py-5 lg:py-2" : "py-8"
              )}
            >
              <Image
                src="/images/logo/Rabovel.png"
                alt="logo"
                width={140}
                height={30}
                className="w-full transition-opacity duration-300 dark:hidden"
              />
              <Image
                src="/images/logo/Rabovel.png"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full transition-opacity duration-300 dark:block"
              />
            </Link>
          </motion.div>

          <div className="flex w-full items-center justify-between px-4">
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg p-2 ring-primary focus:ring-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {navbarOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {menuData.map((menuItem, index) => (
                  <motion.li
                    key={menuItem.id || index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={cn(
                          "relative py-6 text-base font-medium transition-colors duration-200",
                          pathname === menuItem.path
                            ? "text-primary"
                            : "text-foreground/70 hover:text-primary"
                        )}
                      >
                        {menuItem.title}
                        {pathname === menuItem.path && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-4 left-0 right-0 h-0.5 bg-primary"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    ) : menuItem.submenu ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center gap-1 py-6 text-base font-medium text-foreground/70 transition-colors duration-200 hover:text-primary">
                            {menuItem.title}
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="start"
                          className="w-48"
                        >
                          {menuItem.submenu.map((subItem) => (
                            <DropdownMenuItem key={subItem.id} asChild>
                              <Link
                                href={subItem.path}
                                className="cursor-pointer"
                              >
                                {subItem.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Desktop Auth Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden items-center gap-4 md:flex"
            >
              <Button
                variant="ghost"
                asChild
                className="hidden md:flex"
              >
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button
                variant="gradient"
                size="lg"
                asChild
                className="hidden md:flex"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
              <ThemeToggler />
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navbarOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <motion.ul
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 border-t border-border bg-background p-4"
              >
                {menuData.map((menuItem, index) => (
                  <motion.li
                    key={menuItem.id || index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                          pathname === menuItem.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:bg-accent hover:text-primary"
                        )}
                      >
                        {menuItem.title}
                      </Link>
                    ) : menuItem.submenu ? (
                      <div className="space-y-1">
                        <div className="rounded-lg px-4 py-3 text-base font-medium text-foreground/70">
                          {menuItem.title}
                        </div>
                        <ul className="ml-4 space-y-1 border-l border-border pl-4">
                          {menuItem.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.path}
                                onClick={() => setNavbarOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm text-foreground/70 transition-colors duration-200 hover:bg-accent hover:text-primary"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </motion.li>
                ))}
                <li className="flex flex-col gap-2 pt-4">
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/signin" onClick={() => setNavbarOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="gradient" asChild className="w-full">
                    <Link href="/signup" onClick={() => setNavbarOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
