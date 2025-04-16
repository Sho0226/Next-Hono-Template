"use client";
import {
  IconBolt,
  IconBrandNextjs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVercel,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./Header.module.css";
import { Logout } from "@/app/auth/logout/action";
import { useRouter } from "next/navigation";

const techStackMockdata = [
  {
    icon: IconBrandTypescript,
    title: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: IconBrandReact,
    title: "React",
    description:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    link: "https://ja.react.dev/",
  },
  {
    icon: IconBrandNextjs,
    title: "Next.js",
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    link: "https://nextjs.org/",
  },
  {
    icon: IconBolt,
    title: "Supabase",
    description: "Supabase is an open source Firebase alternative.",
    link: "https://supabase.com/",
  },
  {
    icon: IconBrandPrisma,
    title: "Prisma",
    description:
      "Ship production apps at lightning speed, and scale to a global audience effortlessly with our next-gen serverless database.",
    link: "https://www.prisma.io/",
  },
  {
    icon: IconBrandVercel,
    title: "Vercel",
    description:
      "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    link: "https://vercel.com/",
  },
];

const dashBoardMockdata = [
  {
    icon: IconBolt,
    title: "Supabase dashboard",
    description:
      "Supabase dashboard is a web-based interface for managing your Supabase project.",
    link: "https://supabase.com/dashboard/projects",
  },
  {
    icon: IconBrandPrisma,
    title: "Prisma Data Platform",
    description:
      "Prisma Data Platform is a web-based interface for managing your Prisma project.",
    link: "https://cloud.prisma.io/",
  },
];
export function HeaderMegaMenu() {
  const router = useRouter();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [techStackOpened, { toggle: toggleTechStack }] = useDisclosure(false);
  const [dashBoardOpened, { toggle: toggleDashBoard }] = useDisclosure(false);
  const theme = useMantineTheme();
  const handleLogout = () => {
    Logout();
    router.refresh();
    closeDrawer();
  };

  const techStackLinks = techStackMockdata.map((item) => (
    <Anchor href={item.link} key={item.title} target="_blank">
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </Anchor>
  ));

  const dashBoardLinks = dashBoardMockdata.map((item) => (
    <Anchor href={item.link} key={item.title} target="_blank">
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </Anchor>
  ));

  return (
    <Box>
      <header className={styles.header}>
        <Group justify="space-between" h="100%">
          <h3 style={{ cursor : "pointer" }}>Next-Hono-Template</h3>
          <Group h="100%" gap={0} visibleFrom="sm">
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a className={styles.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Tech Stack
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Tech Stack</Text>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                  {techStackLinks}
                </SimpleGrid>
                <div className={styles.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Get started with GitHub source code and your project
                      </Text>
                    </div>
                    <Anchor href="https://github.com/Sho0226/Next-Hono-Template">
                      <Button variant="default">Get started</Button>
                    </Anchor>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a className={styles.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      DashBoard
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>dashBoard</Text>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>
                  {dashBoardLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" onClick={handleLogout}>
              Log out
            </Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <UnstyledButton className={styles.link} onClick={toggleTechStack}>
            <Center inline>
              <Box component="span" mr={5}>
                Tech Stack
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={techStackOpened}>{techStackLinks}</Collapse>
          <UnstyledButton onClick={toggleDashBoard} className={styles.link}>
            <Center inline>
              <Box component="span" mr={5}>
                DashBoard
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={dashBoardOpened}>{dashBoardLinks}</Collapse>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" onClick={handleLogout}>
              Log out
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
